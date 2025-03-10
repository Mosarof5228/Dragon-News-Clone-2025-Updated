import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  console.log(newsDetails.data[0]);
  const completeNews=newsDetails.data[0]
  return (
    <div className="w-11/12 mx-auto p-10">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-8 mx-auto mt-8">
        <section className="col-span-9">
          <h2 className="text-start  font-semibold">Dragon News</h2>
          <div>
            <div className="card bg-base-100  shadow-xl">
              <figure className="px-6 pt-10">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{completeNews?.title}</h2>
                <p className="py-4">{completeNews?.details}</p>
                <div className="card-actions">
                  <Link to='/category/01' className="btn text-white bg-[#D72050]"> <FaArrowLeft />All news in this category</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNav></RightNav>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
