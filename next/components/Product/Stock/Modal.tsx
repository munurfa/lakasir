import Image from "next/image";
import Link from "next/link";
import Button from "../../Ui/Buttons/Button";
import Checkbox from "../../Ui/Fields/Checkbox";
import Form from "../../Ui/Fields/Form";
import Input from "../../Ui/Fields/Input";

interface IStockModalInterface {
  id?: number;
}

const StockModal = (props: IStockModalInterface) => {
  return (
    <div className="w-11/12 mx-auto bg-white pb-7">
      <p className="text-center text-lg py-2 w-full border-2 border-l-none border-t-none border-r-none border-b-2 border-b-gray-300">
        Action
      </p>
      <div className=" w-11/12 mx-auto">
        <div>
          <div className="flex justify-between my-4">
            <div className="flex gap-x-2">
              <Image
                src={"/assets/products/product-image.jpg"}
                width="60px"
                height="60px"
                className="rounded-full"
              />
              <div className="my-auto">
                <p>Product A</p>
                <p className="font-light">Stock 200</p>
              </div>
            </div>
            <p className="my-auto">Rp. 5.000,00</p>
          </div>
        </div>
        <div>
          <Form
            initialValue={{}}
            onSubmit={() => console.log("OK")}
            className="space-y-5"
          >
            {() => (
              <>
                <div className="flex justify-between">
                  <Checkbox name={"remember_me"} label={"Add"} />
                  <Checkbox name={"remember_me"} label={"Reduce"} />
                  {props.id ? (
                    <Link href={`/menu/product/stock/${props.id}`}>
                      <a className="text-lakasir-primary">Show Stock</a>
                    </Link>
                  ) : (
                    <div></div>
                  )}
                </div>
                <Input
                  name={"full_name"}
                  type={"text"}
                  label={
                    <>
                      Full Name<span className="text-red-500">*</span>
                    </>
                  }
                />
                <div className="flex justify-between gap-x-5">
                  <Input
                    name={"full_name"}
                    type={"text"}
                    label={
                      <>
                        Full Name<span className="text-red-500">*</span>
                      </>
                    }
                  />
                  <Input
                    name={"full_name"}
                    type={"text"}
                    label={
                      <>
                        Full Name<span className="text-red-500">*</span>
                      </>
                    }
                  />
                </div>
                <Button className="w-full py-4">Save Stock</Button>
              </>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StockModal;
