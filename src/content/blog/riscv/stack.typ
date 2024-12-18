#import "@preview/cetz:0.3.1"

#cetz.canvas(
  {
    import cetz.draw: *

    content((0, 2), [栈])

    content((2, -0.5), [栈顶:0x000000])
    grid((1, 0), (3, 7), step: (2, 1))
    content((2, 7.5), [栈底:0xFFFFF0])

    set-style(mark: (start: ">"))
    mark(
      (rel: (1.3, -2)), (rel: (0.3, 0), update: false), symbol: "<", fill: black,
    )
    content((rel: (0.3, 0), update: false), [sp])

    mark(
      (rel: (0, -2)), (rel: (0.3, 0), update: false), symbol: "<", fill: black,
    )
    content((rel: (0.3, 0), update: false), [sp])
  },
)
