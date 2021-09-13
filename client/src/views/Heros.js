import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import productsOperations from "../redux/operations";
import { Col, Row, Nav, Button, Container, Card } from "react-bootstrap";

class Heros extends Component {
  componentDidMount() {
    this.props.onFetchHeros();
  }
  render() {
    const { heros } = this.props;
    return (
      <>
        {heros && (
          <Row className="grid">
            {heros.map(({ nickname, _id }) => (
              <Col xs={4} key={_id} id={_id}>
                <Card
                  border="success"
                  style={{ padding: "5px", margin: "10px 0" }}
                >
                  <Card.Img
                    variant="top"
                    src="https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg"
                  />
                  <p> {nickname}</p>

                  <Row md="auto">
                    <Col>
                      <Nav.Item>
                        <NavLink to={`/hero/${_id}`}>Edit</NavLink>
                      </Nav.Item>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        onClick={() => this.props.onRemoveHero(_id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  heros: state.heros.heros,
});
const mapDispatchToProps = {
  onFetchHeros: productsOperations.fetchHeros,
  onRemoveHero: productsOperations.removeHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(Heros);
