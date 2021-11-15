import { getName } from 'utils/name'

export default function handler(req, res) {
  res.status(200).json({ name: 'Dev.to world' })
}
