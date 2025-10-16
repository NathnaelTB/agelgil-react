import img from "../assets/agelgilvacancy.png";

const Vacancy = () => {
  return (
    <div>
      <p className="custom_font custom_title py-4">Vacancy</p>

      <div className="flex md:flex-row flex-col items-center justify-evenly">
        <img
          src={img}
          alt="agelgil vacancy"
          className="md:w-[450px] w-[300px]"
        />

        <p className="py-7 text-justify md:w-[50%] w-[80%]">
          <b>Job Vacancy: Marketing Officer (2 Positions)</b> <br /> <br />
          <b>📍 Location: </b>Bahir Dar, Ethiopia <br /> <br /> <b>🏢 Company:</b> Agelgil Eco
          Packaging Agelgil Eco Packaging, an eco-friendly packaging
          manufacturer based in Bahir Dar, is looking for two experienced
          Marketing Officers to join our growing team. We produce sustainable
          paper packaging products, including shopping bags, notebooks, and
          industrial packaging solutions, serving customers across Ethiopia.{" "}
          <br />
          <br />
          <b>Key Responsibilities:</b>
          <ul className="list-disc">
            <li>
              Plan and implement marketing strategies to grow sales and expand
              market reach.
            </li>

            <li>
              Identify new customers and maintain strong relationships with
              existing clients.
            </li>

            <li>
              Promote Agelgil’s eco-friendly products through both online and
              offline channels.
            </li>

            <li>
              Organize marketing campaigns, exhibitions, and product promotions.
            </li>

            <li>
              Collect customer feedback and market data to improve product and
              service quality.
            </li>

            <li>
              Work closely with the sales and production teams to ensure
              marketing goals are met.
            </li>
          </ul>
          
          <br />
          <b>Requirements</b>
          <ul className="list-disc">
            <li>Proven experience in marketing or sales (minimum 2 years).</li>

            <li>
              Strong communication, negotiation, and customer relationship
              skills.
            </li>

            <li>
              Experience in promoting products to businesses or distributors.
            </li>

            <li>
              Basic understanding of digital marketing and social media
              promotion.
            </li>

            <li>
              Ability to work independently, meet targets, and report results
              clearly.
            </li>

            <li>
              Commitment to sustainability and interest in eco-friendly
              solutions is a plus.
            </li>
          </ul>
          <br /> <br />
          <b>How to Apply</b> <br /> Send your CV and a short letter describing
          your marketing experience to: <br /> 📧 agelgilhr@gmail.com <br />{" "}
          <br /> 📅
          <b>Deadline: </b> <br /> oct 20 ,2025
        </p>
      </div>
    </div>
  );
};

export default Vacancy;
