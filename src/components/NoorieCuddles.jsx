import CounterButton from "./CounterButton";

const NoorieCuddles = ({ cuddles, setCuddles }) => {
  return (
    <div>
      <CounterButton cuddles={cuddles} setCuddles={setCuddles} />
    </div>
  );
};

export default NoorieCuddles;
