#import "@preview/cetz:0.3.1"
#import cetz.draw: *

#let baseBlock(pos1, pos2, _content, comments, name: "Group", anchor: "south-west") = {
  let cmts = for (pos, comment) in comments {
    content("rect." + pos, comment.content, anchor: comment.anchor)
  }
  group({
    rect(pos1, pos2, name: "rect")
    content("rect", _content)
    cmts
  }, name: name)
  hide(content(name + ".rect." + anchor, []))
}

#let block(width, _content, ..args) = baseBlock(
  (rel: (0, 0)), (rel: (width, 0.5)), _content, anchor: "south-east", ..args,
)

#let field(width, _content, lt, rt, ..args) = block(
  width, _content, (
    "north-west": (content: [#h(0.1em)#lt#v(1em)], anchor: "mid-west"),
    "north-east": (content: [#rt#h(0.1em)#v(1em)], anchor: "mid-east"), "south":
    (content: [#v(1em)#(lt - rt + 1)], anchor: "mid"),
  ), ..args,
)

#let field2(_content, lt, rt, ..args) = {
  block((lt - rt + 1)/2, _content, (:), ..args)
}
