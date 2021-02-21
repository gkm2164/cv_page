import React, {useEffect, useState} from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStates} from "./store";
import styles from "./section.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {CareerNode} from "./types";

interface SectionProp {
  node: CareerNode
}

type PropFromRedux = ConnectedProps<typeof connector>;
type Prop = PropFromRedux & SectionProp;

const Section: React.FC<Prop> = ({isFolded, node}) => {
  const {
    title,
    entries
  } = node;

  const [isFoldedLocal, setIsFoldedLocal] = useState(isFolded);
  useEffect(() => setIsFoldedLocal(isFolded), [isFolded]);

  const renderCompany = (entry: any) => (
    <div className={styles.company}>
      <Container>
        <Row>
          <Col>
            <span className={styles.companyName}>{entry.company}</span>
          </Col>
          <Col>
            <span className={styles.location}>{entry.location}</span>
          </Col>
        </Row>
        <Row>
          <Col />
          <Col>
            <span className={styles.tenure}>{entry.tenure}</span>
          </Col>
        </Row>
      </Container>
      <span className={styles.desc}>{entry.desc}</span>
      <span>{entry.team}</span>
      <div>
        <h4>Projects</h4>
        <ul>
          {entry.projects.map((prj: any) =>
            <li>
              <b>{prj.title}</b>,{prj.period}
              <ul>
                {prj.descriptions.map((str: string) => <li>{str}</li>)}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  return <>
    <h2>{title}</h2>
    <button onClick={() => setIsFoldedLocal(false)}>Expand</button>
    <button onClick={() => setIsFoldedLocal(true)}>Collapse</button>
    {!isFoldedLocal && entries.map(entry => renderCompany(entry))}
  </>
}

const mapStateToProps = ({sections}: AppStates, ownProps: SectionProp) => {
  return {
    ...ownProps,
    isFolded: sections.isFolded
  }
}

const connector = connect(
  mapStateToProps,
);

export default connector(Section);