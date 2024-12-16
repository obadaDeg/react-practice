import React from "react";
import PageContent from "../components/PageContents";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An Error Occured!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page";
  } else if (error.status === 500) {
    console.log(error);
    
    message = error.data;
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
