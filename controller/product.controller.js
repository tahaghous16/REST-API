import { product } from "../models/product.model.js";

const controllers = {
  getAllProduct: async (req, res) => {
    const { company, name, sort, select } = req.query;
    const queryObject = {};
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;

    let skip = (page - 1) * limit;

    let apiData = product.find(queryObject);
    apiData = apiData.skip(skip).limit(limit);

    if (sort) {
      let sortFix = sort.split(",").join(" ");
      apiData = apiData.sort(sortFix);
    }

    if (select) {
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
    }

    const Products = await apiData;

    console.log(req.query);
    res.status(200).json({ Products });
  },
  getAllProductTesting: async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductTesting" });
  },
  getAllProductTesting1: async (req, res) => {
    res.status(200).json({ msg: "I am getAllProductTesting 1" });
  },
};

export default controllers;
