import NextErrorComponent from 'next/error';

const Error = ({ statusCode, hasGetInitialPropsRun, err }: { statusCode: number; hasGetInitialPropsRun: boolean; err: unknown }): unknown => {
  /*
   * Integrate Sentry Here
   * if (!hasGetInitialPropsRun && err) {
   *   Sentry.captureException(err);
   * }
   */

  return <NextErrorComponent statusCode={statusCode} />;
};

export default Error;
