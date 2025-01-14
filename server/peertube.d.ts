interface RegisterServerHookOptions {
  target: string // FIXME
  handler: Function
  priority?: number
}

interface RegisterServerSettingOptions {
  name: string
  label: string
  type: 'input' | 'input-checkbox' | 'input-password' | 'input-textarea' | 'markdown-text' | 'markdown-enhanced'
  descriptionHTML?: string
  default?: string | boolean
  private: boolean
}

interface PluginSettingsManager {
  getSetting: (name: string) => Promise<string | boolean>
  getSettings: (names: string[]) => Promise<{ [settingName: string]: string | boolean }>
  setSetting: (name: string, value: string) => Promise<any>
  onSettingsChange: (cb: (names: string[]) => void) => void
}

interface PluginStorageManager {
  getData: (key: string) => Promise<string>
  storeData: (key: string, data: any) => Promise<any>
}

interface PluginVideoCategoryManager {
  addCategory: (categoryKey: number, categoryLabel: string) => boolean
  deleteCategory: (categoryKey: number) => boolean
}

interface PluginVideoLicenceManager {
  addLicence: (licenceKey: number, licenceLabel: string) => boolean
  deleteLicence: (licenceKey: number) => boolean
}

interface PluginVideoLanguageManager {
  addLanguage: (languageKey: string, languageLabel: string) => boolean
  deleteLanguage: (languageKey: string) => boolean
}

type MVideoThumbnail = any // FIXME

interface VideoBlacklistCreate {
  reason?: string
  unfederate?: boolean
}

type ActorModel = any // FIXME

interface PeerTubeHelpers {
  logger: Logger
  database: {
    query: Function
  }
  videos: {
    loadByUrl: (url: string) => Promise<MVideoThumbnail>
    // NB: loadByIdOrUUID was introduced in v3.1.0
    loadByIdOrUUID?: (id: number | string) => Promise<MVideoThumbnail>
    removeVideo: (videoId: number) => Promise<void>
  }
  config: {
    getWebserverUrl: () => string
  }
  moderation: {
    blockServer: (options: { byAccountId: number, hostToBlock: string }) => Promise<void>
    unblockServer: (options: { byAccountId: number, hostToUnblock: string }) => Promise<void>
    blockAccount: (options: { byAccountId: number, handleToBlock: string }) => Promise<void>
    unblockAccount: (options: { byAccountId: number, handleToUnblock: string }) => Promise<void>
    blacklistVideo: (
      options: { videoIdOrUUID: number | string, createOptions: VideoBlacklistCreate }
    ) => Promise<void>
    unblacklistVideo: (options: { videoIdOrUUID: number | string }) => Promise<void>
  }
  server: {
    getServerActor: () => Promise<ActorModel>
  }
}

interface RegisterServerOptions {
  registerHook: (options: RegisterServerHookOptions) => void
  registerSetting: (options: RegisterServerSettingOptions) => void
  settingsManager: PluginSettingsManager
  storageManager: PluginStorageManager
  videoCategoryManager: PluginVideoCategoryManager
  videoLicenceManager: PluginVideoLicenceManager
  videoLanguageManager: PluginVideoLanguageManager
  getRouter: () => Router
  peertubeHelpers: PeerTubeHelpers
}
