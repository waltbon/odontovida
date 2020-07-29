import { NextPageContext } from "next";
import Layout from '../components/common/Layout';

const Error = ({ statusCode, message = '' }) => {

  if (statusCode === 500 || statusCode === 404) {
    return (
      <Layout>
        <section className="m-t-80 p-b-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="page-error-404 text-center">{statusCode}</div>
              </div>
              <div className="col-lg-6">
                <div className="text-left">
                  <h1 className="text-medium">Lo sentimos!</h1>
                  {
                    statusCode === 404 &&
                    <p className="lead">Esta página no existe.</p>
                  }
                  {
                    statusCode === 500 &&
                    <p className="lead">Ha ocurrido un error pero estamos trabajando en esto.</p>
                  }
                  <div className="seperator m-t-20 m-b-20"></div><a href="/" className="btn" type="button">Volver a inicio</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }

  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server. ${message}`
        : "An error occurred on client"}
    </p>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;