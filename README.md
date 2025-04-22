# ---------- 22.04.25 ----------(42)

## Type Conversion

        ☑️ String to Number
        ☑️ Number to String
        ☑️ Boolean to Number
        ☑️ Number to Boolean
        ☑️ any to Boolean

## Introduction to Regular Expressions

        ☑️ https://regex101.com/

        ☑️ Regular expressions (regex) are patterns used to match character combinations in strings.
        - Example: `/abc/` matches "abc" in a string.

        ☑️ Matches specific characters or patterns in text.
        - Example: `/\d+/` matches one or more digits.

## Basic Syntax 👍

        ☑️ Basic syntax includes literals, metacharacters, and special characters.
        - Example: `/a/` matches the character "a".

        ☑️ Literals: Exact characters.
        - Example: `/hello/` matches the word "hello".

        ☑️ Metacharacters: Special symbols with meanings.
        - Example: `.` matches any character except newline.

## Character Classes

        ☑️ Character classes match a set of characters. 👍
        - Example: `/[abc]/` matches "a", "b", or "c".

        ☑️ `\d`: Digit (0-9). 👍
        - Example: `/\d/` matches any digit.

        ☑️ `\w`: Word character (letters, digits, underscores). 👍
        - Example: `/\w/` matches any alphanumeric character.

        ☑️ `\s`: Whitespace (spaces, tabs, line breaks). 👍
        - Example: `/\s/` matches any whitespace.

## Anchoring

        ☑️ Anchors match positions in the text. 👍
        - Example: `^a` matches "a" at the start of the string.

        ☑️ `^`: Start of the string. 👍
        - Example: `^hello` matches "hello" only at the beginning.

        ☑️ `$`: End of the string. 👍
        - Example: `^world$` matches "world" only at the end.

## Quantifiers

        ☑️ Symbols like `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}` define how many times a pattern should repeat.

        ☑️ `*`: 0 or more times. 👍
        - Example: `/a*/` matches "", "a", "aa", etc.

        ☑️ `+`: 1 or more times. 👍
        - Example: `/a+/` matches "a", "aa", etc.

        ☑️ `?`: 0 or 1 time. 👍
        - Example: `/a?/` matches "" or "a".

        ☑️ `{n}`: Exactly `n` times. 👍
        - Example: `/a{3}/` matches "aaa".

        ☑️ `{n,}`: `n` or more times. 👍
        - Example: `/a{2,}/` matches "aa", "aaa", etc.

        ☑️ `{n,m}`: Between `n` and `m` times. 👍
        - Example: `/a{2,4}/` matches "aa", "aaa", "aaaa".

## Groups and Ranges

        ☑️ Groups and ranges allow patterns to be grouped or defined in a range.

        ☑️ `()`: Grouping for capturing parts of a match. 👍
        - Example: `/(abc)/` captures "abc".

        ☑️ `[a-z]`: Matches any character within the range. 👍
        - Example: `/[a-z]/` matches any lowercase letter.

## Escape Characters

        ☑️ Escape characters allow you to use special characters literally. 👍

        ☑️ `\.`: Literal period. 👍
        - Example: `/\./` matches a period.

        ☑️ `\*`: Literal asterisk. 👍
        - Example: `/\*/` matches an asterisk.

        ☑️ `\\`: Literal backslash. 👍
        - Example: `/\\\d/` matches "\d".

## Flags

        ☑️ Flags modify the behavior of a regular expression.

        ☑️ `i`: Case-insensitive matching.
        - Example: `/a/i` matches "A" or "a".

        ☑️ `g`: Global matching.
        - Example: `/\d/g` matches all digits in a string.

        ☑️ `m`: Multi-line matching.
        - Example: `/^a/m` matches "a" at the start of any line.

## Greedy vs Lazy Matching

        ☑️ Greedy matching consumes as much text as possible; lazy matching consumes as little as possible. 👍

        ☑️ `*`: Greedy. 👍
        - Example: `/.*/` matches everything.

        ☑️ `*?`: Lazy. 👍
        - Example: `/.*?/` matches the smallest possible text.

## Replacement

        ☑️ Replacement allows you to change matched strings.

        ☑️ `$&`: Entire match.
        - Example: `"Hello".replace(/o/, '$&o')` → "Hello".

        ☑️ `$1`, `$2`: Group references.
        - Example: `"abc".replace(/(a)(b)/, '$2$1')` → "bac".

## Regexp with string methods

        ☑️ Common string methods that work with regular expressions.

        ☑️ `match()`: Returns an array of matches.
        - Example: `"abc".match(/\w/g)` → ["a", "b", "c"].

        ☑️ `search()`: Returns index of first match.
        - Example: `"abc".search(/b/)` → 1.

        ☑️ `replace()`: Replaces matches with new text.
        - Example: `"abc".replace(/b/, "x")` → "axc".

        ☑️ `split()`: Splits string on matches.
        - Example: `"a,b,c".split(/,/)` → ["a", "b", "c"].

        ☑️ `test()`: Returns true if pattern matches.
        - Example: `/\d/.test("abc123")` → true.

        ☑️ `exec()`: Returns detailed match information.
        - Example: `/(\w)/.exec("abc")` → ["a", "a"].
