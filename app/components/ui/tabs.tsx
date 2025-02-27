import * as React from 'react';
import { cn } from '~/libs/utils/cn';

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, defaultValue, value, onValueChange, ...props }, ref) => {
    const [selectedValue, setSelectedValue] = React.useState(
      value || defaultValue,
    );

    React.useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleValueChange = (newValue: string) => {
      setSelectedValue(newValue);
      onValueChange?.(newValue);
    };

    return (
      <div
        ref={ref}
        className={cn('', className)}
        data-value={selectedValue}
        {...props}
      />
    );
  },
);
Tabs.displayName = 'Tabs';

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md bg-muted p-1',
          className,
        )}
        {...props}
      />
    );
  },
);
TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, ...props }, ref) => {
    const tabsContext = React.useContext(
      React.createContext<{
        value?: string;
        onValueChange?: (value: string) => void;
      }>({}),
    );
    const isSelected = tabsContext.value === value;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isSelected}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          isSelected
            ? 'bg-background text-foreground shadow-sm'
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
          className,
        )}
        onClick={() => tabsContext.onValueChange?.(value)}
        {...props}
      />
    );
  },
);
TabsTrigger.displayName = 'TabsTrigger';

export { Tabs, TabsList, TabsTrigger };
