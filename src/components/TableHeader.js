import TableCell from './TableCell';
import Stack from './Stack';

const TableHeader = () => {
  return (
    <Stack direction="row" width="100%">
      <TableCell content="Name" isForHeader />
      <TableCell content="Area (in sq.m.)" isForHeader />
      <TableCell content="Population" isForHeader isLastInRow />
    </Stack>
  );
};

export default TableHeader;
