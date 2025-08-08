So... right now all libraries are in a `0.x.x` version because everything is
kinda volatile while I move libs from Node to Deno, from NPM to JSR. That means
the start will be messy and that's ok. Tests are only a translation from the old
`@lou.codes/test` to use "vanilla" `Deno.test`, docs are outdated and filled
with TODOs, but again ... that's ok. Let's just finish moving everything first,
clean stuff up, and once everything feels good and working, we can finally move
to `1.0.0` for everything. Now about the actual "to do":

- [x] Move `@lou.codes/iterables` as `@coven/iterables`.
- [x] Move `@lou.codes/math` as `@coven/math`.
- [x] Move `functional-expression` as `@coven/expression`.
- [x] Move `@lou.codes/cron` as `@coven/cron`.
- [x] Move `@lou.codes/notify` as `@simulcast/core`.
- [x] Move `*-pair` as `@coven/pair`.
- [x] Check if is worth it to create `@coven/solid-pair` (they don't need this).
- [x] Cleanup tests (next is @coven/pair)
- [x] Cleanup docs (~~all~~ most `@example` should have a description 😅).
- [x] Start working on new `@simulcast/{name}` libs:
    - [ ] `@simulcast/angular`.
    - [x] `@simulcast/preact`.
    - [x] `@simulcast/react`.
    - [x] ~~@simulcast/svelte~~ svelte library dev is painful, will skip for
          now.
    - [x] `@simulcast/vue`.
