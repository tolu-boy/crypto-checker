import React from "react";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import useCryptoId from "../queries/useCrytoDetails";
import styles from "../styles/Details.module.css";

const Ids = () => {
  const router = useRouter();
  const { data: CryptoId } = useCryptoId(router.query.id);
  const crytoDetail = CryptoId ? CryptoId : [];

  return (
    <div className={styles.searchArea}>
      <Row>
        <Col md={24}>
          <h2>{crytoDetail.name} Section </h2>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2>
            Rank :<span> {crytoDetail.coingecko_rank}</span>
          </h2>
        </Col>

        <Col md={12}>
          <h2>
            Current Price :
            <span>
              &#36; {crytoDetail.market_data?.current_price?.usd || []}
            </span>
          </h2>
        </Col>
      </Row>
    </div>
  );
};

export default Ids;
