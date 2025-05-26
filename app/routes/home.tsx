import * as stylex from "@stylexjs/stylex";
import type { Route } from "./+types/home";

const styles = stylex.create({
  foo: {
    color: "red"
  }
});

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  //// return <Welcome />;

  return (
    <div {...stylex.props(styles.foo)}>
      <h1>Hello</h1>
    </div>
  )
}
