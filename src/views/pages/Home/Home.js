import React, { Component } from 'react';
import styles from './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 style={{ textAlign: 'center' }}>Shared components demo</h1>
        <ul>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Badge</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Button</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Card</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Grid (Column, Row)</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Icon</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Input</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>InputLabel</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Loader</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Table</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Tabs</span>
          </li>
          <li>
            <input type="checkbox" checked={false} />
            <span>&nbsp;&nbsp;</span>
            <span>Toolbar</span>
          </li>
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
};

Home.defaultProps = {
};

export default Home;
