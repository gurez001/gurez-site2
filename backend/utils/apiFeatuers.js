class ApiFetures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          $or: [
            {
              name: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
            },
            {
              product_name: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
            },
            {
              title: {
                $regex: this.queryStr.keyword,
                $options: "i",
              },
            },
          ],
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    // removing some fields for category
    const removeField = ["keyword", "page", "limit"];
    removeField.forEach((key) => delete queryCopy[key]);

    // Handle seo_link filter explicitly if present
    if (queryCopy.seo_link) {
      queryCopy.seo_link = { $regex: queryCopy.seo_link, $options: "i" };
    }
    // single product filter using url
    if (queryCopy.slug) {
      queryCopy.slug = { $regex: queryCopy.slug, $options: "i" };
    }
    if (queryCopy.product_uuid) {
      queryCopy.product_uuid = { $regex: queryCopy.product_uuid, $options: "i" };
    }
    // Filter price and ratings
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    console.log(queryStr);
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }
  sort() {
    if (this.queryStr.sort) {
      const sortBy = this.queryStr.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort({ creditAt: 1 }); // Default sorting by 'creditAt' in ascending order
    }
    return this;
  }
  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resultPerPage * (currentPage - 1);
    // this.query = this.query.limit(resultPerPage).skip(skip);
    this.query = this.query.limit(resultPerPage).skip(skip).sort({ _id: -1 });
    return this;
  }
}

module.exports = ApiFetures;
