"use client";

import { useEffect, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { Rating, Grid2, LinearProgress } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { mensKurta } from "../../../Data/mensKurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productById } from "../../../state/Product/Action";
import { addItemToCart } from "../../../state/Cart/Action";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store);

  useEffect(() => {
    dispatch(productById(params.productId));
  }, [params.productId]);
  const loading = product.isLoading;

  const actual_product = product?.product?.product;

  const handleClick = () => {
    const data = { productId: actual_product._id, size: selectedSize.name };
    dispatch(addItemToCart(data));
    navigate("/cart");
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb ">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product?.breadcrumbs?.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        {loading ? (
          <div className="min-h-64">loading...</div>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image gallery */}
            <div className="flex flex-col items-center mt-10">
              <div className="overflow-hidden rounded-lg max-h-[35rem] max-w-[30rem]">
                <img
                  alt={actual_product?.imageUrl.alt}
                  src={actual_product?.imageUrl}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className="flex flex-wrap space-x-5 justify-center mt-5">
                {product?.images?.map((item) => (
                  <div className="overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem]">
                    <img
                      alt={item.alt}
                      src={item.src}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-[35rem] lg:grid-cols-1 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                  {actual_product?.brand}
                </h1>
                <h2 className="text-gray-900 opacity-50 mt-5">
                  {actual_product?.title}
                </h2>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="flex space-x-5 mt-5">
                  <p className="font-semibold">
                    ${actual_product?.discountedPrice}
                  </p>
                  <p className="line-through opacity-60">
                    ${actual_product?.price}
                  </p>
                  <p className="text-green-700 font-semibold">
                    {actual_product?.discountPercent}% off
                  </p>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <div className="flex space-x-5 items-center">
                    <Rating
                      name="read-only"
                      value={3.5}
                      readOnly
                      precision={0.5}
                    />
                    <p className="opacity-60 text-sm">405 Ratings</p>
                    <p className="cursor-pointer font-semibold text-sm text-purple-800 hover:text-purple-950">
                      200 Reviews
                    </p>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {actual_product?.sizes?.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            // disabled={size.inStock}
                            className={classNames(
                              true
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              "group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6"
                            )}
                          >
                            <span>{size.name}</span>
                            {true ? (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                              />
                            ) : (
                              <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                              >
                                <svg
                                  stroke="currentColor"
                                  viewBox="0 0 100 100"
                                  preserveAspectRatio="none"
                                  className="absolute inset-0 size-full stroke-2 text-gray-200"
                                >
                                  <line
                                    x1={0}
                                    x2={100}
                                    y1={100}
                                    y2={0}
                                    vectorEffect="non-scaling-stroke"
                                  />
                                </svg>
                              </span>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>

                  <button
                    type="button"
                    onClick={handleClick}
                    className="mt-10 flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Add to Cart
                  </button>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product?.highlights?.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Rating and Reviews */}
        <section className="m-5">
          <h1 className="mb-5 text-2xl font-bold">Rating & Reviews</h1>

          {/* Customers who Reviewed */}
          <Grid2 className="border p-5" container spacing={4}>
            <Grid2 size={6}>
              <div className="flex flex-col space-y-5">
                {[1, 1, 1, 1].map((item) => (
                  <ProductReviewCard />
                ))}
              </div>
            </Grid2>

            {/* Rating waala Bar */}
            <Grid2 size={6}>
              <div className="flex flex-col">
                <p className="text-md font-semibold">Product Overall Rating</p>
                <div className="flex space-x-5 mt-3">
                  <Rating value={3.5} precision={0.5} readOnly />
                  <p className="opacity-60">424 Ratings</p>
                </div>
                <div className="flex flex-col mt-8 space-y-4">
                  <Grid2 container spacing={2} alignItems={"center"}>
                    <Grid2 size={2}>
                      <p>Excellent</p>
                    </Grid2>
                    <Grid2 size={6}>
                      <LinearProgress
                        sx={{
                          bgcolor: "light-gray",
                          borderRadius: 4,
                          height: 5,
                        }}
                        color="success"
                        variant="determinate"
                        value={50}
                      />
                    </Grid2>
                    <Grid2 size={3}>
                      <p className="ml-3 opacity-60">200 Reviews</p>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} alignItems={"center"}>
                    <Grid2 size={2}>
                      <p>Very Good</p>
                    </Grid2>
                    <Grid2 size={6}>
                      <LinearProgress
                        sx={{
                          bgcolor: "light-gray",
                          borderRadius: 4,
                          height: 5,
                        }}
                        color="success"
                        variant="determinate"
                        value={40}
                      />
                    </Grid2>
                    <Grid2 size={3}>
                      <p className="ml-3 opacity-60">100 Reviews</p>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} alignItems={"center"}>
                    <Grid2 size={2}>
                      <p>Good</p>
                    </Grid2>
                    <Grid2 size={6}>
                      <LinearProgress
                        sx={{
                          bgcolor: "light-gray",
                          borderRadius: 4,
                          height: 5,
                        }}
                        color="primary"
                        variant="determinate"
                        value={30}
                      />
                    </Grid2>
                    <Grid2 size={3}>
                      <p className="ml-3 opacity-60">80 Reviews</p>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} alignItems={"center"}>
                    <Grid2 size={2}>
                      <p>Average</p>
                    </Grid2>
                    <Grid2 size={6}>
                      <LinearProgress
                        sx={{
                          bgcolor: "light-gray",
                          borderRadius: 4,
                          height: 5,
                        }}
                        color="warning"
                        variant="determinate"
                        value={20}
                      />
                    </Grid2>
                    <Grid2 size={3}>
                      <p className="ml-3 opacity-60">60 Reviews</p>
                    </Grid2>
                  </Grid2>

                  <Grid2 container spacing={2} alignItems={"center"}>
                    <Grid2 size={2}>
                      <p>Poor</p>
                    </Grid2>
                    <Grid2 size={6}>
                      <LinearProgress
                        sx={{
                          bgcolor: "light-gray",
                          borderRadius: 4,
                          height: 5,
                        }}
                        color="error"
                        variant="determinate"
                        value={10}
                      />
                    </Grid2>
                    <Grid2 size={3}>
                      <p className="ml-3 opacity-60">30 Reviews</p>
                    </Grid2>
                  </Grid2>
                </div>
              </div>
            </Grid2>
          </Grid2>
        </section>

        {/* Similar Products */}
        <section className="mx-5 mt-20 mb-5">
          <h1 className="text-2xl font-bold">Similar Products</h1>
          <div className="flex flex-wrap">
            {mensKurta.map((item) => (
              <HomeSectionCard product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
