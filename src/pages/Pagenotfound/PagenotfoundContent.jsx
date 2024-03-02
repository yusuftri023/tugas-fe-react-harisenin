function PagenotfoundContent() {
  return (
    <section className="h-[100%] mt-16 ">
      <div className="absolute top-[40%]  translate-y-[-50%] left-[50%] translate-x-[-50%] mx-auto   text-black w-fit h-fit ">
        <img src="/src/assets/page-not-found.svg" className="h-[300px]"></img>
        <p className="text-center text-5xl font-semibold ">
          404 Page Not Found
        </p>
      </div>
    </section>
  );
}

export default PagenotfoundContent;
