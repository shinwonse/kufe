import * as React from 'react';

import { cn } from '~/libs/utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = 'Avatar', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
          className,
        )}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="aspect-square h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            <span className="text-xs font-medium text-muted-foreground">
              {alt.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

export { Avatar };
