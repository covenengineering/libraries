<img alt="Coven Engineering Comparison logo" src="./logo.svg" height="108" />

🪞 Minimalistic deep comparison.

This library takes 2 values (a `left` and a `right`) and returns an iterator
with all the differences between said values. The differences are represented by
3 kinds:

- **Create:** Missing `left` and existing `right`.
- **Update:** Different `left` and `right` values.
- **Delete:** Existing `left` and missing `right`.
