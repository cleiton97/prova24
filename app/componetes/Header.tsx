export default function Header() {
  return (
    <div className="bg-[#333333] md:flex items-center justify-center" style={{ width: "1350px", height: "450px" }}>
      <div className="basis-1/2 text-center">
        <div className="basis-1/2">
          <div className="basis-1/2 text-center text-white">
            <h3 className="text-5xl">Ipsum feugiat consequat?</h3>
            <h4 className="text-2xl">Sed lacus nascetur ac ante amet sapien.</h4>
            <a className="py-8 text-black bg-white border border-black px-3 py-[5px] mr-2" href="#section">Sign Up</a>
            <a className="py-8 text-white bg-[#333333] border border-white px-3 py-[5px] ml-2" href="#section">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

