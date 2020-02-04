# dm
Personal theme from material discord

only change: 

```css
.message-2qnXI6.groupStart-23k01U {
	position: relative;
	margin: 16px 26px 0 80px;
	padding: 12px 8px 2px 8px;
	background-color: var(--message-color);
	border-radius: var(--border-radius);
	border-bottom: none !important;
	overflow: visible !important;
}

```

```css
.message-2qnXI6:not(.groupStart-23k01U) {
	margin: 0 26px 0 80px;
	padding: 0 5px 2px 8px;
	background: var(--message-color);
	border-radius: 0 0 var(--border-radius) var(--border-radius);
	border-bottom: none !important;
	overflow: visible !important;
}
```


```css
.message-2qnXI6.groupStart-23k01U .headerCozy-2H1QuU:before {
	content: " ";
	position: absolute;
	width: 0;
	height: 0;
	top: -12px;
	left: 58px;
	margin: -6px 0 0 0;
	padding-bottom:4px;
	border: 6px solid transparent;
	border-color: transparent;
	border-right-color: var(--message-color);
	pointer-events: none;
	transform: rotate(135deg);
}

```
