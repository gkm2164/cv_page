import React, {useEffect, useState} from "react";
import {connect, ConnectedProps} from "react-redux";
import {AppStates} from "./store";
import styles from "./section.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {CareerNode} from "./types";
import {Button} from "react-bootstrap";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

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
          <Col/>
          <Col>
            <span className={styles.tenure}>{entry.tenure}</span>
          </Col>
        </Row>
      </Container>
      <span className={styles.desc}>{entry.desc}</span>
      <span>{entry.team}</span>
      <div style={{width: "100%"}}>
        <h4>Projects</h4>
        <ul>
          {entry.projects.map((prj: any, idx: number) =>
            <li key={idx}>
              <b>{prj.title}</b>,{prj.period}
              <ul>
                {prj.descriptions.map((str: string, idx: number) => <li key={idx}>{str}</li>)}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </div>
  );

  return <div className={styles.section}>
    <div className={styles.sectionHeader} style={{width: "100%"}}>
      <h2 style={{width: "100%"}}>{title}</h2>
      <span>
      {isFoldedLocal ?
        <Button onClick={() => setIsFoldedLocal(false)}><FaChevronDown/></Button> :
        <Button onClick={() => setIsFoldedLocal(true)}><FaChevronUp/></Button>}
      </span>
    </div>
    {!isFoldedLocal && entries.map(entry => renderCompany(entry))}
  </div>
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