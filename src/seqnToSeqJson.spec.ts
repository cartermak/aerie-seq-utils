import { seqnToSeqJson } from './seqnToSeqJson';

describe('seqn parsing', () => {
  it('should parse seqn', async () => {
    const seqn = 'R00:00:00 CMD_NO_OP';
    seqnToSeqJson(seqn, '');
  });
});
