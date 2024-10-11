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
- [ ] Move `@lou.codes/cron` as `@coven/cron`.
- [ ] Move `@lou.codes/notify` as `@simulcast/core`.
- [ ] Move `react-pair` as `@coven/react-pair`.
- [ ] Move `preact-pair` as `@coven/preact-pair`.
- [ ] Check if is worth it to create `@coven/solid-pair`.
- [ ] Cleanup tests.
- [ ] Cleanup docs.
- [ ] Start working on new `@simulcast/{name}` libs:
  - [ ] `@simulcast/angular`.
  - [ ] `@simulcast/preact`.
  - [ ] `@simulcast/react`.
  - [ ] `@simulcast/solid`.
  - [ ] `@simulcast/svelte`.
  - [ ] `@simulcast/vue`.
  - [ ] `@simulcast/web-component`.
