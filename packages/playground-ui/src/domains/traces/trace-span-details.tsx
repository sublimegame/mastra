import { useContext } from 'react';

import { SyntaxHighlighter } from '@/components/syntax-highlighter';

import { TraceContext } from './context/trace-context';

import { formatDuration, formatOtelTimestamp, transformKey } from './utils';
import { Header } from '@/ds/components/Header';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Icon, LatencyIcon, TraceIcon } from '@/ds/icons';
import { Button } from '@/ds/components/Button';
import { Txt } from '@/ds/components/Txt';
import { Badge } from '@/ds/components/Badge';
import { getSpanVariant } from './utils/getSpanVariant';
import { spanIconMap, spanVariantClasses } from '@/ds/components/TraceTree/Span';

export function SpanDetail() {
  const { span, setSpan, trace } = useContext(TraceContext);
  if (!span || !trace) return null;

  // Span order is reversed
  const prevSpan = () => {
    const currentIndex = trace.findIndex(t => t.id === span.id);
    if (currentIndex !== -1 && currentIndex < trace.length - 1) {
      setSpan(trace[currentIndex + 1]);
    }
  };

  // Span order is reversed
  const nextSpan = () => {
    const currentIndex = trace.findIndex(t => t.id === span.id);
    if (currentIndex !== -1 && currentIndex > 0) {
      setSpan(trace[currentIndex - 1]);
    }
  };

  const SpanIcon = spanIconMap[getSpanVariant(span)];
  const variantClass = spanVariantClasses[getSpanVariant(span)];

  return (
    <aside>
      <Header>
        <div className="flex items-center gap-1">
          <Button className="bg-transparent border-none" onClick={prevSpan}>
            <Icon>
              <ChevronUp />
            </Icon>
          </Button>
          <Button className="bg-transparent border-none" onClick={nextSpan}>
            <Icon>
              <ChevronDown />
            </Icon>
          </Button>
        </div>
        <div>
          <Txt variant="ui-lg" className="font-medium text-icon5" as="h2">
            Span <span className="ml-2 text-icon3">{span.id.substring(0, 5)}</span>
          </Txt>
        </div>
      </Header>

      <div className="p-5">
        <Txt variant="header-md" as="h3" className="text-icon-6 flex items-center gap-4 pb-3">
          <Icon size="lg" className="bg-surface4 p-1 rounded-md">
            <SpanIcon className={variantClass} />
          </Icon>

          {span.name}
        </Txt>

        <div className="flex flex-row gap-2 items-center">
          <Badge icon={<LatencyIcon />}>{formatDuration(span.duration)}ms</Badge>
        </div>

        <hr className="border-border1 border-sm my-5" />
        <dl className="grid grid-cols-2 justify-between gap-2">
          <dt className="font-medium text-ui-md text-icon3">ID</dt>
          <dd className="text-ui-md text-icon6">{span.id}</dd>

          <dt className="font-medium text-ui-md text-icon3">Created at</dt>
          <dd className="text-ui-md text-icon6">{span.startTime ? formatOtelTimestamp(span.startTime) : ''}</dd>
        </dl>

        {span.attributes && <Attributes attributes={span.attributes} />}
      </div>
    </aside>
  );
}

interface AttributesProps {
  attributes: Record<string, string | number | boolean | null>;
}

function Attributes({ attributes }: AttributesProps) {
  if (!attributes) return null;

  const entries = Object.entries(attributes);
  if (entries.length === 0) return null;

  const keysToHide = ['http.request_id', 'componentName'];

  return (
    <div>
      {entries
        .filter(([key]) => !keysToHide.includes(key))
        .map(([key, val]) => {
          return (
            <div key={key}>
              <hr className="border-border1 border-sm my-5" />

              <Txt as="h4" variant="ui-md" className="text-icon3 pb-2">
                {transformKey(key)}
              </Txt>

              <AttributeValue value={val} />
            </div>
          );
        })}
    </div>
  );
}

interface AttributeValueProps {
  value: string | number | boolean | null;
}

const AttributeValue = ({ value }: AttributeValueProps) => {
  if (!value)
    return (
      <Txt as="p" variant="ui-md" className="text-icon6">
        N/A
      </Txt>
    );

  if (typeof value === 'number' || typeof value === 'boolean') {
    return (
      <Txt as="p" variant="ui-md" className="text-icon6">
        {String(value)}
      </Txt>
    );
  }

  if (typeof value === 'object') {
    return <SyntaxHighlighter data={value} />;
  }

  try {
    return <SyntaxHighlighter data={JSON.parse(value)} />;
  } catch {
    return (
      <Txt as="p" variant="ui-md" className="text-icon6">
        {String(value)}
      </Txt>
    );
  }
};
