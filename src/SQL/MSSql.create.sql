



CREATE TABLE [Справочник] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Актуально] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Обращение] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Номер] INT  NULL,

	 [Статус] VARCHAR(19)  NULL,

	 [ДатаПоступления] DATETIME  NULL,

	 [ДатаЗакрытия] DATETIME  NULL,

	 [Обратившийся] VARCHAR(255)  NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Телефон] VARCHAR(255)  NULL,

	 [ДопОбращение_m0] UNIQUEIDENTIFIER  NULL,

	 [Ответственный_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [ТипОбращения_m0] UNIQUEIDENTIFIER  NULL,

	 [Причина_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [ВидОбращения_m0] UNIQUEIDENTIFIER  NULL,

	 [Оператор_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудник] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [EMail] VARCHAR(255)  NULL,

	 [Актуально] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Причина] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 [Код] INT  NULL,

	 [Актуально] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ВидОбращения] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 [Код] INT  NULL,

	 [Актуально] BIT  NULL,

	 [ТипОбращения_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТипОбращения] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Название] VARCHAR(255)  NULL,

	 [Код] INT  NULL,

	 [Актуально] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [Обращение] ADD CONSTRAINT [Обращение_FОбращение_0] FOREIGN KEY ([ДопОбращение_m0]) REFERENCES [Обращение]
CREATE INDEX Обращение_IДопОбращение_m0 on [Обращение] ([ДопОбращение_m0])

 ALTER TABLE [Обращение] ADD CONSTRAINT [Обращение_FСотрудник_0] FOREIGN KEY ([Ответственный_m0]) REFERENCES [Сотрудник]
CREATE INDEX Обращение_IОтветственный_m0 on [Обращение] ([Ответственный_m0])

 ALTER TABLE [Обращение] ADD CONSTRAINT [Обращение_FТипОбращения_0] FOREIGN KEY ([ТипОбращения_m0]) REFERENCES [ТипОбращения]
CREATE INDEX Обращение_IТипОбращения_m0 on [Обращение] ([ТипОбращения_m0])

 ALTER TABLE [Обращение] ADD CONSTRAINT [Обращение_FПричина_0] FOREIGN KEY ([Причина_m0]) REFERENCES [Причина]
CREATE INDEX Обращение_IПричина_m0 on [Обращение] ([Причина_m0])

 ALTER TABLE [Обращение] ADD CONSTRAINT [Обращение_FВидОбращения_0] FOREIGN KEY ([ВидОбращения_m0]) REFERENCES [ВидОбращения]
CREATE INDEX Обращение_IВидОбращения_m0 on [Обращение] ([ВидОбращения_m0])

 ALTER TABLE [Обращение] ADD CONSTRAINT [Обращение_FСотрудник_1] FOREIGN KEY ([Оператор_m0]) REFERENCES [Сотрудник]
CREATE INDEX Обращение_IОператор_m0 on [Обращение] ([Оператор_m0])

 ALTER TABLE [ВидОбращения] ADD CONSTRAINT [ВидОбращения_FТипОбращения_0] FOREIGN KEY ([ТипОбращения_m0]) REFERENCES [ТипОбращения]
CREATE INDEX ВидОбращения_IТипОбращения_m0 on [ВидОбращения] ([ТипОбращения_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

