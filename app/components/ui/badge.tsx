import * as React from 'react';

import { cn } from '~/libs/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = 'Badge';

export { Badge };
