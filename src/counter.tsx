import { Component } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export class Counter extends Component<CounterProps> {
  render() {
    const { count, increment, decrement } = this.props;

    return (
      <div className="flex gap-2">
        <Badge variant={count ? "secondary" : "default"}>{count || "Zero"}</Badge>
        <Button variant="destructive">Delete</Button>
        <Button variant="outline" disabled={count === 0} onClick={decrement}>
          Decrement
        </Button>
        <Button variant="outline" onClick={increment}>
          Increment
        </Button>
      </div>
    );
  }
}
