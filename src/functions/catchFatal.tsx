import { logger } from "../main";

export default function catchFatal(error: any) {
  try {
    logger.fatal(error);
    alert(`Critical TSX error: ${error}`);
  } finally {
  }
}
