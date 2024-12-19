# React useEffect Async/Await Cleanup Issue

This repository demonstrates a common error in React when using `async/await` within the `useEffect` hook without proper cleanup.

## Problem

The provided `MyComponent` uses `async/await` to fetch data and update the component's state.  However, it fails to return a cleanup function from `useEffect`. This means that if the component unmounts before the `fetchData` function completes, the promise might still be running, potentially leading to memory leaks or unexpected behavior.

## Solution

The solution involves returning a cleanup function from `useEffect` that cancels any ongoing asynchronous operations.  This ensures that resources are released properly when the component unmounts.