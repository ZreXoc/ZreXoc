#import "@preview/cetz:0.3.1"

#cetz.canvas(
  {
    import cetz.draw: *

    group({
      rect((rel: (0, 0)), (rel: (3, 1)), name: "rect")
      content("rect", [Reserved])
      content("rect.south-west", [$0" "$], anchor: "mid-east")
    }, name: "Reserved")
    group(
      {
        rect("Reserved.rect.north-west", (rel: (3, 3)), name: "rect")
        content("rect", [Text])
        content("rect.south-west", [pc = $"0001 0000"_("hex")" "$], anchor: "mid-east")
      }, name: "Text",
    )
    group(
      {
        rect("Text.rect.north-west", (rel: (3, 1)), name: "rect")
        content("rect", [Static])
        content("rect.south-west", [pc = $"1000 0000"_("hex")" "$], anchor: "mid-east")
      }, name: "Static",
    )
    group(
      {
        hide(content("Static.rect.north-west", []))
        rect((), (rel: (3, 4)), name: "rect")

        hide(line("rect.south", (rel: (0, 0))))
        content((rel: (0, 0.3), update: false), [Dynamic Data], name: "c1")
        hide(line("rect.north", (rel: (0, 0))))
        content((rel: (0, -0.3), update: false), [Stack], name: "c2")
        content("rect.north-west", [Sp = $"bfff fff0"_("hex")" "$], anchor: "mid-east")

        set-style(mark: (end: ">"))
        hide(line("c1.north", (rel: (0, 0.1))))
        line((), (rel: (0, 0.8)))
        hide(line("c2.south", (rel: (0, -0.1))))
        line((), (rel: (0, -0.8)))
      },
    )
  },
)
