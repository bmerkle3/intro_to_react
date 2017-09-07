const ce = React.createElement;

const MyTitle = function(props) {
  return ce('div', null, ce('h1', { style: { color: props.colour } }, props.title));
};

// long way without const ce
// const MyTitle = function () {
//   return (
//     React.createElement('div', null,
//       React.createElement('h1', null, 'My second component')
//       )
//     )
// }

const MyFirstComponent = function() {
  return ce('div', { id: 'my-first-component', colour: 'LightSlateGray' }, [
    ce(MyTitle, { title: 'Friends', colour: 'LightGreen' }),
    ce(MyTitle, { title: 'Silicon Valley', colour: 'LightSeaGreen' }),
    ce(MyTitle, { title: 'Modern Family', colour: 'LightSkyBlue' }),
    ce(MyTitle, { title: 'Parks and Recreation', colour: 'LightSalmon' })
  ]);
};

// long way without const ce
// const MyFirstComponent = function () {
//   return React.createElement('div', null,
//     [React.createElement(MyTitle),
//     React.createElement(MyTitle),
//     React.createElement(MyTitle),
//     React.createElement(MyTitle)]
//       )
//   }

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
