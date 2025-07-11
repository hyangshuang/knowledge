import { blogPostResolver } from './BlogPostResolver'
import { postInfos, postProducts, postKinds } from './PostData'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Shanghai')

export * from './types'

export { blogPostResolver, postInfos, postProducts, postKinds }
