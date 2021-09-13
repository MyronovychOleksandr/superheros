import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
  },
};

const initialState = {
  nickname: "",
  real_name: "",
  origin_description: "",
  superpowers: "",
  catch_phrase: "",
};

export default class HeroForm extends Component {
  state = {
    ...initialState,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddHero({ ...this.state });
    this.setState({ ...initialState });
  };

  render() {
    const {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catch_phrase,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Nickname
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              value={nickname}
              name="nickname"
              required
              placeholder="Nickname"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Real_name
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              value={real_name}
              name="real_name"
              required
              placeholder="Real name"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Origin_description
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              as="textarea"
              value={origin_description}
              name="origin_description"
              placeholder="Origin description"
              required
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Superpowers
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              as="textarea"
              value={superpowers}
              name="superpowers"
              required
              placeholder="Superpowers"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>
        <label style={styles.label}>
          Catch_phrase
          <InputGroup size="sm" className="mb-3">
            <FormControl
              type="text"
              as="textarea"
              value={catch_phrase}
              name="catch_phrase"
              required
              placeholder="Catch phrase"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              onChange={this.handleChange}
            />
          </InputGroup>
        </label>

        <Button type="submit">ADD</Button>
      </form>
    );
  }
}
