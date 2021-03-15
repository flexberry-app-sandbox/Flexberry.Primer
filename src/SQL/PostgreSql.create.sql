




CREATE TABLE Справочник (

 primaryKey UUID NOT NULL,

 Актуально BOOLEAN NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Обращение (

 primaryKey UUID NOT NULL,

 Номер INT NULL,

 Статус VARCHAR(19) NULL,

 ДатаПоступления TIMESTAMP(3) NULL,

 ДатаЗакрытия TIMESTAMP(3) NULL,

 Обратившийся VARCHAR(255) NULL,

 Адрес VARCHAR(255) NULL,

 Телефон VARCHAR(255) NULL,

 ДопОбращение_m0 UUID NULL,

 Ответственный_m0 UUID NOT NULL,

 ТипОбращения_m0 UUID NULL,

 Причина_m0 UUID NOT NULL,

 ВидОбращения_m0 UUID NULL,

 Оператор_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Сотрудник (

 primaryKey UUID NOT NULL,

 ФИО VARCHAR(255) NULL,

 EMail VARCHAR(255) NULL,

 Актуально BOOLEAN NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Причина (

 primaryKey UUID NOT NULL,

 Название VARCHAR(255) NULL,

 Код INT NULL,

 Актуально BOOLEAN NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE ВидОбращения (

 primaryKey UUID NOT NULL,

 Название VARCHAR(255) NULL,

 Код INT NULL,

 Актуально BOOLEAN NULL,

 ТипОбращения_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE ТипОбращения (

 primaryKey UUID NOT NULL,

 Название VARCHAR(255) NULL,

 Код INT NULL,

 Актуально BOOLEAN NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMNETLOCKDATA (

 LockKey VARCHAR(300) NOT NULL,

 UserName VARCHAR(300) NOT NULL,

 LockDate TIMESTAMP(3) NULL,

 PRIMARY KEY (LockKey));



CREATE TABLE STORMSETTINGS (

 primaryKey UUID NOT NULL,

 Module VARCHAR(1000) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 "User" VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAdvLimit (

 primaryKey UUID NOT NULL,

 "User" VARCHAR(255) NULL,

 Published BOOLEAN NULL,

 Module VARCHAR(255) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 HotKeyData INT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERSETTING (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMWEBSEARCH (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 "Order" INT NOT NULL,

 PresentView VARCHAR(255) NOT NULL,

 DetailedView VARCHAR(255) NOT NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERDETAIL (

 primaryKey UUID NOT NULL,

 Caption VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 ConnectMasterProp VARCHAR(255) NOT NULL,

 OwnerConnectProp VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERLOOKUP (

 primaryKey UUID NOT NULL,

 DataObjectType VARCHAR(255) NOT NULL,

 Container VARCHAR(255) NULL,

 ContainerTag VARCHAR(255) NULL,

 FieldsToView VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE UserSetting (

 primaryKey UUID NOT NULL,

 AppName VARCHAR(256) NULL,

 UserName VARCHAR(512) NULL,

 UserGuid UUID NULL,

 ModuleName VARCHAR(1024) NULL,

 ModuleGuid UUID NULL,

 SettName VARCHAR(256) NULL,

 SettGuid UUID NULL,

 SettLastAccessTime TIMESTAMP(3) NULL,

 StrVal VARCHAR(256) NULL,

 TxtVal TEXT NULL,

 IntVal INT NULL,

 BoolVal BOOLEAN NULL,

 GuidVal UUID NULL,

 DecimalVal DECIMAL(20,10) NULL,

 DateTimeVal TIMESTAMP(3) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE ApplicationLog (

 primaryKey UUID NOT NULL,

 Category VARCHAR(64) NULL,

 EventId INT NULL,

 Priority INT NULL,

 Severity VARCHAR(32) NULL,

 Title VARCHAR(256) NULL,

 Timestamp TIMESTAMP(3) NULL,

 MachineName VARCHAR(32) NULL,

 AppDomainName VARCHAR(512) NULL,

 ProcessId VARCHAR(256) NULL,

 ProcessName VARCHAR(512) NULL,

 ThreadName VARCHAR(512) NULL,

 Win32ThreadId VARCHAR(128) NULL,

 Message VARCHAR(2500) NULL,

 FormattedMessage TEXT NULL,

 PRIMARY KEY (primaryKey));




 ALTER TABLE Обращение ADD CONSTRAINT FK116fb3fe3e4192115bd42370102d1ba8de995614 FOREIGN KEY (ДопОбращение_m0) REFERENCES Обращение; 
CREATE INDEX Index116fb3fe3e4192115bd42370102d1ba8de995614 on Обращение (ДопОбращение_m0); 

 ALTER TABLE Обращение ADD CONSTRAINT FK4867273ab25b23dfb31ff32419d8266584944392 FOREIGN KEY (Ответственный_m0) REFERENCES Сотрудник; 
CREATE INDEX Index4867273ab25b23dfb31ff32419d8266584944392 on Обращение (Ответственный_m0); 

 ALTER TABLE Обращение ADD CONSTRAINT FK62758e675c7a7702cc3e4c8c309905bf7c4bddfa FOREIGN KEY (ТипОбращения_m0) REFERENCES ТипОбращения; 
CREATE INDEX Index62758e675c7a7702cc3e4c8c309905bf7c4bddfa on Обращение (ТипОбращения_m0); 

 ALTER TABLE Обращение ADD CONSTRAINT FK86dac8ff8cc139e82a55e9f3429ba5dbfb631ddb FOREIGN KEY (Причина_m0) REFERENCES Причина; 
CREATE INDEX Index86dac8ff8cc139e82a55e9f3429ba5dbfb631ddb on Обращение (Причина_m0); 

 ALTER TABLE Обращение ADD CONSTRAINT FK7c82fc093bca62a372ec7a31193cc4444c2bbe30 FOREIGN KEY (ВидОбращения_m0) REFERENCES ВидОбращения; 
CREATE INDEX Index7c82fc093bca62a372ec7a31193cc4444c2bbe30 on Обращение (ВидОбращения_m0); 

 ALTER TABLE Обращение ADD CONSTRAINT FKc67c4031fda4d555cafa839589db37dff1a478c7 FOREIGN KEY (Оператор_m0) REFERENCES Сотрудник; 
CREATE INDEX Indexc67c4031fda4d555cafa839589db37dff1a478c7 on Обращение (Оператор_m0); 

 ALTER TABLE ВидОбращения ADD CONSTRAINT FKfb55730b67ca7584347a6658260c17cef2ce40c8 FOREIGN KEY (ТипОбращения_m0) REFERENCES ТипОбращения; 
CREATE INDEX Indexfb55730b67ca7584347a6658260c17cef2ce40c8 on ВидОбращения (ТипОбращения_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

