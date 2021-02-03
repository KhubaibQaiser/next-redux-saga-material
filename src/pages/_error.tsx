import NextErrorComponent from "next/error";

const Error = ({ statusCode }: { statusCode: number }): unknown => {
  /*
   * Integrate Sentry Here
   * if (!hasGetInitialPropsRun && err) {
   *   Sentry.captureException(err);
   * }
   */

  return <NextErrorComponent statusCode={statusCode} />;
};

export default Error;
