const Button = ({ title }: { title: string }) => <button className="btn">{false}</button>;

export const App = () => (
  <div className="container mx-auto pt-4">
    <div className="flex gap-2">
      <Button title={"Click Me " + "1"} />
      <Button title="Click Me 2" />
    </div>
    <div className="box" />
  </div>
);
