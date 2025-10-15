import img from "../assets/agelgilvacancy.png";

const Vacancy = () => {
  return (
    <div>
      <p className="custom_font custom_title py-4">Vacancy</p>

      <div className="flex md:flex-row flex-col items-center justify-evenly">
        <img src={img} alt="agelgil vacancy" className="md:w-[450px] w-[300px]" />

        <p className="py-7 text-justify md:w-[50%] w-[80%]">
          Job Vacancy: Marketing Officer (2 Positions) <br /> <br />📍 Location: Bahir Dar,
          Ethiopia <br /> <br /> 🏢 Company: Agelgil Eco Packaging Agelgil Eco Packaging, an
          eco-friendly packaging manufacturer based in Bahir Dar, is looking for
          two experienced Marketing Officers to join our growing team. We
          produce sustainable paper packaging products, including shopping bags,
          notebooks, and industrial packaging solutions, serving customers
          across Ethiopia. Key Responsibilities Plan and implement marketing
          strategies to grow sales and expand market reach. Identify new
          customers and maintain strong relationships with existing clients.
          Promote Agelgil’s eco-friendly products through both online and
          offline channels. Organize marketing campaigns, exhibitions, and
          product promotions. Collect customer feedback and market data to
          improve product and service quality. Work closely with the sales and
          production teams to ensure marketing goals are met. Requirements
          Proven experience in marketing or sales (minimum 2 years). Strong
          communication, negotiation, and customer relationship skills.
          Experience in promoting products to businesses or distributors. Basic
          understanding of digital marketing and social media promotion. Ability
          to work independently, meet targets, and report results clearly.
          Commitment to sustainability and interest in eco-friendly solutions is
          a plus. How to Apply Send your CV and a short letter describing your
          marketing experience to: <br /> 📧 agelgilhr@gmail.com <br /> <br /> 📅 Deadline: oct 20
          ,2025 for more info visit our website agelgilecopackage.com 
        </p>
      </div>
    </div>
  );
};

export default Vacancy;
