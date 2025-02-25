import { cn } from '~/libs/utils/cn';

const stats = [
  {
    label: 'Members',
    value: '1,240',
    color: 'text-emerald-500',
  },
  {
    label: 'Daily Active Users',
    chart: true,
  },
];

// Pre-computed chart data with height classes instead of inline styles
const chartData = [
  { heightClass: 'h-[45%]', id: 'bar-1' },
  { heightClass: 'h-[65%]', id: 'bar-2' },
  { heightClass: 'h-[55%]', id: 'bar-3' },
  { heightClass: 'h-[80%]', id: 'bar-4' },
  { heightClass: 'h-[70%]', id: 'bar-5' },
  { heightClass: 'h-[90%]', id: 'bar-6' },
  { heightClass: 'h-[75%]', id: 'bar-7' },
];

export function CommunityStats() {
  return (
    <section className={cn('py-16')}>
      <div className={cn('container')}>
        <h2 className={cn('mb-8 text-2xl font-bold')}>Community Stats</h2>
        <div className={cn('grid grid-cols-1 gap-6 md:grid-cols-2')}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn('rounded-lg border border-border/50 bg-card p-6')}
            >
              {stat.chart ? (
                <div className={cn('space-y-4')}>
                  <h3 className={cn('text-lg font-medium')}>{stat.label}</h3>
                  <div className={cn('h-40 w-full')}>
                    <div className={cn('flex h-full flex-col justify-end')}>
                      <div className={cn('flex h-full items-end gap-2')}>
                        {/* Simple chart visualization */}
                        {chartData.map((data) => (
                          <div
                            key={data.id}
                            className={cn('relative w-full', data.heightClass)}
                          >
                            <div
                              className={cn(
                                'absolute inset-x-0 bottom-0 h-full rounded-t bg-emerald-500/80 dark:bg-emerald-500/60',
                              )}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'flex justify-between text-xs text-muted-foreground',
                    )}
                  >
                    <span>Mon</span>
                    <span>Wed</span>
                    <span>Fri</span>
                    <span>Sun</span>
                  </div>
                </div>
              ) : (
                <div className={cn('flex flex-col gap-2')}>
                  <h3 className={cn('text-lg font-medium')}>{stat.label}</h3>
                  <p className={cn('text-4xl font-bold', stat.color)}>
                    {stat.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
