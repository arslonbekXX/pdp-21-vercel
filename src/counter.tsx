import { Component, type ReactNode } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

interface CounterProps {
  children2: ReactNode;
}

export class Counter extends Component<CounterProps> {
  render() {
    return (
      <div className="flex gap-2">
        {this.props.children2}
        <Badge>10</Badge>
        <Button variant="outline">Decrement</Button>
        <Button variant="outline">Increment</Button>
      </div>
    );
  }
}
