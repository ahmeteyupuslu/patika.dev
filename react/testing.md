uygulamalar için testing oluşturma üzerinde duruldu.
farklı componentler oluşturuldak sonra her seferinde bunların çalışır durumda olup olmadığını kontrol etmek yerine test kodu hazırlayarak
otomasyonu yapılmasını sağlayabiliriz
bu testlerin farklı biçimleri var. biz unit-test üzerinde duracağız.

# counter.js
```js
import { useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</div>
	);
}

export default Counter;
```

# counter-test.js

```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./index";

describe("Counter Tests", () => {
	let increaseBtn, decreaseBtn, count;

	beforeEach(() => {
		console.log("Her testten önce çalışacağım!");
		render(<Counter />);
		increaseBtn = screen.getByText("Increase");
		decreaseBtn = screen.getByText("Decrease");
		count = screen.getByText("0"); //içinde 0 alan nesneyi yakalattık
	});

	beforeAll(() => {
		console.log("İlk başta bir kere çalışacağım!");
	});

	afterEach(() => {
		console.log("Her testten sonra çalışacağım!");
	});

	afterAll(() => {
		console.log("En son bir kere çalışacağım!");
	});

	test("increase btn", () => {
		userEvent.click(increaseBtn); //arttırma butonunu kullandırıyoruz
		expect(count).toHaveTextContent("1"); //1 elementine sahip olmasını bekliyoruz
	});

	test("decrease btn", () => {
		userEvent.click(decreaseBtn); //azaltma butonunu kullandırıyoruz
		expect(count).toHaveTextContent("-1"); //0'ın -1 e dönüşmesini bekliyoruz
	});
});
```

# todo.js
```js
import { useState } from "react";

const defaultItems = [
	{
		name: "Item A",
	},
	{
		name: "Item B",
	},
	{
		name: "Item C",
	},
];

function Todo() {
	const [text, setText] = useState("");
	const [items, setItems] = useState(defaultItems);

	const addItem = () => {
		setItems((prev) => [...prev, { name: text }]);
		setText("");
	};

	return (
		<div>
			<label>
				Text
				<input
					value={text}
					onChange={(e) => {
						setText(e.target.value);
					}}
				/>
			</label>
			<button onClick={addItem}>Add</button>

			<br />
			<br />
			{items.map((item, key) => (
				<div key={key}>{item.name}</div>
			))}
		</div>
	);
}

export default Todo;
```

# todo.test.js
```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo testleri", () => {
	let button, input;

	beforeEach(() => {
		render(<Todo />);

		button = screen.getByText("Add");
		input = screen.getByLabelText("Text");
	});

	test("Varsayılan olarak verilen 3 nesne render edilmeli", () => {
		const items = screen.getAllByText(/Item/i);

		expect(items.length).toEqual(3);
	});

	test("Input ve button dokümanda bulunmalı", () => {
		expect(button).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
		// inputu doldur
		const name = "Mehmet";
		userEvent.type(input, name);

		// butona tıkla
		userEvent.click(button);

		// assertion
		expect(screen.getByText(name)).toBeInTheDocument();
	});
});
```