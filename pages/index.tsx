import type { NextPage } from "next";
import { useCaisyField } from "@caisy/ui-extension-react";

const Home: NextPage = () => {
  const { value, setValue, } = useCaisyField();

  const onChange = (e: any) => {
    setValue(e.target.value ? `${e.target.value}` : null);
  };

  return (
    <div>
      <input onChange={onChange} value={value}/>
    </div>
  );
};

export default Home;
