



CREATE TABLE "Справочник"
(

	"primaryKey" RAW(16) NOT NULL,

	"Актуально" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Обращение"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Статус" NVARCHAR2(19) NULL,

	"ДатаПоступления" DATE NULL,

	"ДатаЗакрытия" DATE NULL,

	"Обратившийся" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Телефон" NVARCHAR2(255) NULL,

	"ДопОбращение_m0" RAW(16) NULL,

	"Ответственный_m0" RAW(16) NOT NULL,

	"ТипОбращения_m0" RAW(16) NULL,

	"Причина_m0" RAW(16) NOT NULL,

	"ВидОбращения_m0" RAW(16) NULL,

	"Оператор_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудник"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"EMail" NVARCHAR2(255) NULL,

	"Актуально" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Причина"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	"Актуально" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ВидОбращения"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	"Актуально" NUMBER(1) NULL,

	"ТипОбращения_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТипОбращения"
(

	"primaryKey" RAW(16) NOT NULL,

	"Название" NVARCHAR2(255) NULL,

	"Код" NUMBER(10) NULL,

	"Актуально" NUMBER(1) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Обращение"
	ADD CONSTRAINT "Обращение_FОб_3913" FOREIGN KEY ("ДопОбращение_m0") REFERENCES "Обращение" ("primaryKey");

CREATE INDEX "Обращение_IДоп_419" on "Обращение" ("ДопОбращение_m0");

ALTER TABLE "Обращение"
	ADD CONSTRAINT "Обращение_FСо_7712" FOREIGN KEY ("Ответственный_m0") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Обращение_IОт_3969" on "Обращение" ("Ответственный_m0");

ALTER TABLE "Обращение"
	ADD CONSTRAINT "Обращение_FТи_9691" FOREIGN KEY ("ТипОбращения_m0") REFERENCES "ТипОбращения" ("primaryKey");

CREATE INDEX "Обращение_IТи_3009" on "Обращение" ("ТипОбращения_m0");

ALTER TABLE "Обращение"
	ADD CONSTRAINT "Обращение_FПр_2039" FOREIGN KEY ("Причина_m0") REFERENCES "Причина" ("primaryKey");

CREATE INDEX "Обращение_IПр_8612" on "Обращение" ("Причина_m0");

ALTER TABLE "Обращение"
	ADD CONSTRAINT "Обращение_FВи_6634" FOREIGN KEY ("ВидОбращения_m0") REFERENCES "ВидОбращения" ("primaryKey");

CREATE INDEX "Обращение_IВи_4419" on "Обращение" ("ВидОбращения_m0");

ALTER TABLE "Обращение"
	ADD CONSTRAINT "Обращение_FСо_7713" FOREIGN KEY ("Оператор_m0") REFERENCES "Сотрудник" ("primaryKey");

CREATE INDEX "Обращение_IОпе_479" on "Обращение" ("Оператор_m0");

ALTER TABLE "ВидОбращения"
	ADD CONSTRAINT "ВидОбращения__2123" FOREIGN KEY ("ТипОбращения_m0") REFERENCES "ТипОбращения" ("primaryKey");

CREATE INDEX "ВидОбращения__3691" on "ВидОбращения" ("ТипОбращения_m0");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


