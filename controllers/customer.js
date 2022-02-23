const temp = [{ email: "m123" }];
import url from "url";
export const customers = (req, res) => {
  console.log(temp);
  res.setHeader("Access-Control-Allow-Origin", "*").json({
    data: temp,
  });
};

export const addCustomer = (req, res) => {
  console.log(req.body);
  temp.push(req.body);
  res.setHeader("Access-Control-Allow-Origin", "*").json({
    success: true,
    payload: req.body,
  });
};

export const specificCustomer = (req, res) => {
  console.log("here");
  const query = url.parse(req.url, true).query;
  const result = temp.filter((ele) => ele.email == query.email);
  if (result.length == 1) {
    res.json({
      name: result[0].email,
      status: "customer",
      address: result[0].address,
      email: result[0].email,
      phone: "87073729988",
      mobile: "8707372988",
      handles: {
        website: "https://bootdey.com",
        github: "github",
        twitter: "twitter",
        instagram: "instagram",
        facebook: "facebook",
      },
      projects: ["website", "website Markup", "one Page", "Mobile Template"],
    });
  } else {
    res.json({});
  }
};
