---
title: Combo Operation
order: 6
---

### graph.node(nodeFn)

Set the style and other configurations for each node.

<span style="background-color: rgb(251, 233, 231); color: rgb(139, 53, 56)"><strong>⚠️Attention:</strong></span> this funcion must **be called before graph.render()**. It does not take effect otherwise.

**Parameters**

| Name   | Type     | Required | Description                              |
| ------ | -------- | -------- | ---------------------------------------- |
| nodeFn | Function | true     | Return the configurations for each node. |

**Usage**

```javascript
graph.node((node) => {
  return {
    id: node.id,
    type: 'rect',
    style: {
      fill: 'blue',
    },
  };
});

graph.data(data);
graph.render();
```

### graph.edge(edgeFn)

Set the style and other configurations for each edge.

<span style="background-color: rgb(251, 233, 231); color: rgb(139, 53, 56)"><strong>⚠️Attention:</strong></span> this funcion must **be called before graph.render()**. It does not take effect otherwise.

**Parameters**

| Name   | Type     | Required | Description                              |
| ------ | -------- | -------- | ---------------------------------------- |
| edgeFn | Function | true     | Return the configurations for each edge. |

**Usage**

```javascript
graph.edge((edge) => {
  return {
    id: edge.id,
    type: 'cubic-horizontal',
    style: {
      stroke: 'green',
    },
  };
});

graph.data(data);
graph.render();
```

### graph.combo(comboFn)

Set the style and other configurations for each combo.

<span style="background-color: rgb(251, 233, 231); color: rgb(139, 53, 56)"><strong>⚠️Attention:</strong></span> this funcion must **be called before graph.render()**. It does not take effect otherwise.

**Parameters**

| Name    | Type     | Required | Description                               |
| ------- | -------- | -------- | ----------------------------------------- |
| comboFn | Function | true     | Return the configurations for each combo. |

**Usage**

```javascript
graph.combo((combo) => {
  return {
    id: combo.id,
    type: 'rect',
    style: {
      stroke: 'green',
    },
  };
});

graph.data(data);
graph.render();
```

### graph.collapseCombo(combo)

Collapse a Combo.

**Parameters**

| Name  | Type            | Required | Description                                           |
| ----- | --------------- | -------- | ----------------------------------------------------- |
| combo | string / ICombo | true     | The ID of the combo or the combo item to be collapsed |

**Usage**

```javascript
graph.collapseCombo('combo1')
```

### graph.expandCombo(combo)

Expand a Combo.

**Parameters**

| Name  | Type            | Required | Description                                          |
| ----- | --------------- | -------- | ---------------------------------------------------- |
| combo | string / ICombo | true     | The ID of the combo or the combo item to be expanded |

**Usage**

```javascript
graph.expandCombo('combo1')
```

### graph.collapseExpandCombo(combo)

Expand the `combo` if it is collapsed. Collapse the `combo` if it is expanded.

**Parameters**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| combo | string / ICombo | true | The ID of the combo or the combo item to be collapsed or expanded |

**Usage**

```javascript
graph.collapseExpandCombo('combo1')
```

### graph.createCombo(combo, elements)

Create a new combo with existing nodes or combos to be its children.

**Parameters**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| combo | string / ICombo | true | The ID or the configuration of the combo to be created |
| elements | string[] | The IDs of the existing nodes or combos to be the children of the newly created combo |

**Usage**

```javascript
// The first parameter is the id of the combo to be created
graph.createCombo('combo1', ['node1', 'node2', 'combo2'])

// The first parameter is the configuration of the combo to be created
graph.createCombo({
  id: 'combo1',
  style: {
    fill: '#f00'
  }
}, ['node1', 'node2', 'combo2'])
```

### graph.uncombo(combo)

Ungroup the combo, which deletes the combo itself, and appends the children of the combo to its parent(if it exists).

**Parameters**

| Name  | Type            | Required | Description                                        |
| ----- | --------------- | -------- | -------------------------------------------------- |
| combo | string / ICombo | true     | The ID of the item or the combo item to be updated |

**Usage**

```javascript
graph.uncombo('combo1')
```

### Comparison for Combo and Hull

<img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*mD9LQamLud8AAAAAAAAAAAAAARQnAQ' alt='combo-hull' width='750'/>